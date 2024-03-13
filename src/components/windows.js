import { ContentWindow } from "./content/content";
import { NavigationWindow } from "./navigation/navigation";

export function Windows() {
  return (
    <div className="windows">
      <NavigationWindow />
      <ContentWindow />
    </div>
  );
}
