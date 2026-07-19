"use server";

import { getPodcastFeed } from "@/lib/rss";
import { revalidatePath } from "next/cache";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

const ADMIN_COOKIE = "pm_admin_session";

export async function signIn(formData: FormData) {
  const passcode = String(formData.get("passcode") || "");
  const configuredHash = process.env.PM_ADMIN_PASSCODE_HASH;
  const sessionSecret = process.env.PM_ADMIN_SESSION_SECRET;

  if (!configuredHash || !sessionSecret) {
    redirect("/admin?status=setup-required");
  }

  const hash = await sha256(passcode);
  if (hash !== configuredHash) {
    redirect("/admin?status=denied");
  }

  const jar = await cookies();
  jar.set(ADMIN_COOKIE, sessionSecret, {
    httpOnly: true,
    sameSite: "lax",
    secure: process.env.NODE_ENV === "production",
    maxAge: 60 * 60 * 8,
    path: "/",
  });
  redirect("/admin?status=unlocked");
}

export async function signOut() {
  const jar = await cookies();
  jar.delete(ADMIN_COOKIE);
  redirect("/admin?status=signed-out");
}

export async function syncRss() {
  await requireAdmin();
  await getPodcastFeed();
  revalidatePath("/");
  revalidatePath("/episodes");
  revalidatePath("/guests");
  revalidatePath("/topics");
  redirect("/admin?sync=complete");
}

export async function isAdminSession() {
  const jar = await cookies();
  const sessionSecret = process.env.PM_ADMIN_SESSION_SECRET;
  return Boolean(sessionSecret && jar.get(ADMIN_COOKIE)?.value === sessionSecret);
}

async function requireAdmin() {
  const ok = await isAdminSession();
  if (!ok) redirect("/admin?status=locked");
}

async function sha256(value: string) {
  const digest = await crypto.subtle.digest("SHA-256", new TextEncoder().encode(value));
  return Array.from(new Uint8Array(digest))
    .map((byte) => byte.toString(16).padStart(2, "0"))
    .join("");
}
