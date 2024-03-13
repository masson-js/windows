import { Panel } from "./Panel";

export function Window({ children }) {
  return (
    <div className="window">
      <Panel />
      <div className="content">{children}</div>
    </div>
  );
}
