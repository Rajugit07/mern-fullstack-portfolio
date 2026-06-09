import type { ReactNode } from "react";

interface ContainerProps {
    children: ReactNode;
    className?: string;
    as?: keyof HTMLElementTagNameMap;
}

/**
 * Max-width container wrapper.
 * Centers content and applies responsive horizontal padding
 * matching the design system margins (20px mobile, 80px desktop).
 */
export const Container = ({
    children,
    className = "",
    as: Tag = "div",
}: ContainerProps) => {
    return <Tag className={`container-wide ${className}`}>{children}</Tag>;
};
