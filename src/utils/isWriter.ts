import { Writer } from "@/app/(main)/common/dto/writer";

export const isWriter = (dataItem: Record<string, any>): boolean => {
  return (dataItem as Writer).firstName !== undefined;
};
