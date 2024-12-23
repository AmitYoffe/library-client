import { Writer } from "@/app/(main)/writers/dtos/writer";

export const isWriter = (dataItem: Record<string, any>): boolean => {
  return (dataItem as Writer).firstName !== undefined;
};
