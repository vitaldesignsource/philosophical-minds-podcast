import { permanentRedirect } from "next/navigation";

/**
 * The Alchemy shelf became Alchemies when it grew to cover the Chinese, Indian
 * and Tibetan traditions alongside the Western one. Existing links and anything
 * already indexed under the old slug land here.
 */
export default function AlchemyRedirect() {
  permanentRedirect("/library/alchemies");
}
