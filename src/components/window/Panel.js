import { PanelButtons } from "./PanelButtons";
import { PanelTitle } from "./PanelTitle";

export function Panel() {
  return (
    <div className="panel">
      <PanelButtons />
      <PanelTitle />
      <span className="dummy-span"></span>
    </div>
  );
}
