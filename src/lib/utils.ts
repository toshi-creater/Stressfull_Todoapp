import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

const camelToSnakeStr = (str: string) => {
  return str.replace(/[A-Z]/g, letter => `_${letter.toLowerCase()}`);
}

const snakeToCamelStr = (str: string) => {
  return str.replace(/_([a-z])/g, (_, letter) => letter.toUpperCase());
}

export function snakeToCamel<T extends Record<string, any> | Record<string, any>[]>(obj: T): any {
  if (Array.isArray(obj)) {
    // 配列の場合は各要素を変換
    return obj.map(row =>
      Object.fromEntries(
        Object.entries(row).map(([key, value]) => [snakeToCamelStr(key), value])
      )
    );
  } else {
    // 単一オブジェクトの場合
    return Object.fromEntries(
      Object.entries(obj).map(([key, value]) => [snakeToCamelStr(key), value])
    );
  }
}

export function camelToSnake<T extends Record<string, any> | Record<string, any>[]>(obj: T): any {
  if (Array.isArray(obj)) {
    // 配列の場合
    return obj.map(row =>
      Object.fromEntries(
        Object.entries(row).map(([key, value]) => [camelToSnakeStr(key), value])
      )
    );
  } else {
    // 単一オブジェクトの場合
    return Object.fromEntries(
      Object.entries(obj).map(([key, value]) => [camelToSnakeStr(key), value])
    );
  }
}

export function getToday() {
  const today = new Date()
  const year = today.getFullYear();
  const month = String(today.getMonth() + 1).padStart(2, '0'); // 月は0始まり
  const day = String(today.getDate()).padStart(2, '0');
  return `${year}-${month}-${day}`;
}