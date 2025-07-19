import { useInstall } from "@/common/utils";
import index from "./src/index.vue";
import SvgIcon from "./src/components/svg-icon.vue";
import FontIcon from "./src/components/font-icon.vue";

export { SvgIcon, FontIcon };

export type * from "./src/types";

export const Icon = useInstall(index);

export default index;
