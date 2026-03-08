import { isArray, isObject } from "./is";

/**
 * 深拷贝函数，支持循环引用
 * @param obj 任意对象
 * @param hash WeakMap 用于处理循环引用
 */
export function deepClone<T>(obj: T, hash = new WeakMap()): T {
  // 处理 null、undefined 或基本数据类型
  if (obj === null || typeof obj !== "object") return obj;

  // 处理循环引用
  if (hash.has(obj)) {
    return hash.get(obj);
  }

  // 处理内置对象类型
  if (obj instanceof Date) return new Date(obj) as any;
  if (obj instanceof RegExp) return new RegExp(obj) as any;
  if (obj instanceof Map) {
    const result = new Map();
    hash.set(obj, result);
    obj.forEach((value, key) => {
      result.set(deepClone(key, hash), deepClone(value, hash));
    });
    return result as any;
  }
  if (obj instanceof Set) {
    const result = new Set();
    hash.set(obj, result);
    obj.forEach(value => {
      result.add(deepClone(value, hash));
    });
    return result as any;
  }

  // 处理 Buffer（Node.js 环境）
  // if (typeof Buffer !== "undefined" && Buffer.isBuffer && Buffer.isBuffer(obj)) {
  //   return Buffer.from(obj) as any;
  // }

  // 处理数组
  if (isArray(obj)) {
    const result: any[] = [];
    hash.set(obj, result);
    obj.forEach((item, index) => {
      result[index] = deepClone(item, hash);
    });
    return result as any;
  }

  // 处理普通对象
  if (isObject(obj)) {
    // 保持原型链
    const Constructor = obj.constructor;
    let clonedObj: any;

    // 尝试创建相同类型的对象
    if (Constructor === Object) clonedObj = {};
    else if (typeof Constructor === "function") {
      try {
        clonedObj = Object.create(Constructor.prototype);
      } catch {
        clonedObj = Object.create(Object.getPrototypeOf(obj));
      }
    } else clonedObj = Object.create(Object.getPrototypeOf(obj));

    hash.set(obj, clonedObj);

    // 复制所有可枚举属性（包括 Symbol 键）
    [...Object.keys(obj), ...Object.getOwnPropertySymbols(obj)].forEach(key => {
      if (Object.prototype.hasOwnProperty.call(obj, key)) {
        clonedObj[key] = deepClone((obj as any)[key], hash);
      }
    });

    return clonedObj;
  }

  return obj;
}
