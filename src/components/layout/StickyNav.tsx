"use client";

import { useEffect, useState, useRef } from "react";
import styles from "./StickyNav.module.css";

interface NavItem {
  id: string;
  label: string;
  color?: string;
}

interface StickyNavProps {
  items: NavItem[];
}

export function StickyNav({ items }: StickyNavProps) {
  const [activeId, setActiveId] = useState(items[0]?.id ?? "");
  const navRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observers: IntersectionObserver[] = [];
    const sectionMap = new Map<string, boolean>();

    items.forEach((item) => {
      const el = document.getElementById(item.id);
      if (!el) return;

      sectionMap.set(item.id, false);

      const observer = new IntersectionObserver(
        ([entry]) => {
          sectionMap.set(item.id, entry.isIntersecting);
          const firstVisible = items.find((i) => sectionMap.get(i.id));
          if (firstVisible) setActiveId(firstVisible.id);
        },
        { rootMargin: "-80px 0px -60% 0px", threshold: 0 }
      );

      observer.observe(el);
      observers.push(observer);
    });

    return () => observers.forEach((o) => o.disconnect());
  }, [items]);

  useEffect(() => {
    if (!navRef.current) return;
    const activeLink = navRef.current.querySelector(
      `[data-id="${activeId}"]`
    ) as HTMLElement;
    if (activeLink) {
      activeLink.scrollIntoView({
        behavior: "smooth",
        block: "nearest",
        inline: "center",
      });
    }
  }, [activeId]);

  return (
    <nav className={styles.nav} ref={navRef} aria-label="Page sections">
      <div className={styles.track}>
        {items.map((item) => {
          const isActive = activeId === item.id;
          const colorStyle = item.color
            ? ({
                "--nav-item-color": item.color,
              } as React.CSSProperties)
            : undefined;

          return (
            <a
              key={item.id}
              href={`#${item.id}`}
              data-id={item.id}
              className={`${styles.link} ${isActive ? styles.active : ""} ${item.color ? styles.colored : ""}`}
              style={colorStyle}
            >
              {item.label}
            </a>
          );
        })}
      </div>
    </nav>
  );
}
