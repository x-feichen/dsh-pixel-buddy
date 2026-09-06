/** DSH 宿主 UI 原语（运行时由模块加载器提供，仅声明用到的成员） */
declare module '@deepseek-ai/dsh-client-ui-primitives' {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  export const Menu: any;
  export const IconChevronDownOutline14: unknown;
}
declare module 'react-dom/client' {
  export function createRoot(container: Element): { render(node: unknown): void; unmount(): void };
}
