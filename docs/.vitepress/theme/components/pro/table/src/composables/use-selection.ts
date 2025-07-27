import type { ProTableMainNamespace } from "../types";
import { readonly, ref } from "vue";
import { isFunction } from "@/common/utils";

/**
 * 表格多选数据操作
 *
 * @param rowKey 当表格可以多选时，所指定的 id
 * */
export const useSelection = (rowKey: ProTableMainNamespace.Props["rowKey"] = "id") => {
  const isSelected = ref<boolean>(false);
  // 当前选中的所有数组
  const selectedList = ref<Record<string, any>[]>([]);
  // 当前选中的所有 ids 数组
  const selectedListIds = ref<string[]>([]);

  /**
   * 多选操作
   *
   * @param newSelection 当前选择的所有数据
   */
  const selectionChange = (newSelection: Record<string, any>[]) => {
    newSelection.length ? (isSelected.value = true) : (isSelected.value = false);
    selectedList.value = newSelection;
    computedSelectedIds(newSelection);
  };

  /**
   * 计算多选数据的 ids
   *
   * @param newSelection 当前选择的所有数据
   */
  const computedSelectedIds = (newSelection: Record<string, any>[]) => {
    const ids: string[] = [];
    newSelection.forEach(item => ids.push(item[getRowKey(item)]));
    selectedListIds.value = ids;
  };

  const getRowKey = (row: Record<string, any>) => {
    if (isFunction(rowKey)) return rowKey(row);
    return rowKey;
  };

  return {
    isSelected,
    selectedList,
    selectedListIds,
    selectionChange,
  };
};

export type UseSelectState = Omit<ReturnType<typeof useSelection>, "selectionChange">;
