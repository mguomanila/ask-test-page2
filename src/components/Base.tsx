import type React from "react";

/**
 * Since React props has a common property that can be re-used,
 * implement an interface for that that, so just conveniently extend here.
 */
export interface BaseProps {
    className? : string;
    style? : React.CSSProperties;
    children? : React.ReactNode;
    key? : string | number;
    eventHandler? : React.EventHandler<any>;
}
