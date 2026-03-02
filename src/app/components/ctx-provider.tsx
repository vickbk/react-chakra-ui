import { Provider } from "@/shared/shakra/components/ui/provider";

export const CtxProvider = ({ children }: { children: React.ReactNode }) => {
  return <Provider>{children}</Provider>;
};
