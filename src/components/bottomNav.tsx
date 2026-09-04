import { For, onMount, createSignal } from "solid-js";
import type { Accessor } from "solid-js";
import { items } from "../api/items";

export default function BottomNav(props: Readonly<{
  sessionData: Accessor<any>;
  loadItemPage: (id: string, name: string) => void;
  edulink: any;
  status: any;
  clubData: any[];
}>) {
  const [styles, setStyles] = createSignal<{ [key: string]: string } | null>(null);
  const [activeItem, setActiveItem] = createSignal<string | null>(null);

  onMount(async () => {
    try {
      const cssModule = await import(`../public/assets/css/default/mobile.module.css`);
      const normalized: { [key: string]: string } = {
        ...cssModule.default,
        ...cssModule,
      };
      setStyles(normalized);
    } catch (e) {
      console.warn("Failed to load mobile styles", e);
    }
  });

  const menu = items.slice(0, 5);

  const handleNavClick = (item: typeof menu[0]) => {
    setActiveItem(item.id);
    props.loadItemPage(item.id, item.name, true);
  };

  return (
    <div>
      {styles() && (
        <nav class={styles()!["mobile-nav"]} role="navigation" aria-label="Bottom navigation">
          <For each={menu}>{(item) => (
            <button
              class={`${styles()!["nav-button"]} ${activeItem() === item.id ? styles()!["active"] : ""}`}
              onClick={(e) => {
                e.preventDefault();
                handleNavClick(item);
              }}
              title={item.name}
              aria-current={activeItem() === item.id ? "page" : undefined}
            >
              <span class={styles()!["icon-wrap"]}>
                <item.icon />
              </span>
              <span class={styles()!["label"]}>{item.name}</span>
            </button>
          )}</For>
        </nav>
      )}
    </div>
  );
}
