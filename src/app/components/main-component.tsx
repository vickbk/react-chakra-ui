import { ShakraDemo } from "@/features/shakra-ui/components/demo";
import { CtxProvider } from "./ctx-provider";

export const MainComponent = () => {
  return (
    <CtxProvider>
      <ShakraDemo />
    </CtxProvider>
  );
};
