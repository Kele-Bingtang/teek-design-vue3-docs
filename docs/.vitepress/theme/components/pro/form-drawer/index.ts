import { useInstall } from "@/common/utils";
import index from "./src/index.vue";

export type * from "./src/types";

export const ProFormDrawer = useInstall(index);

export default index;
