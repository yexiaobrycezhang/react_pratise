import { groupByDate } from "@/components/utils/util.js";

const chatList = [
  {
    id: "1",
    title: "React入门实战教程",
    updateTime: Date.now(),
  },
  {
    id: "2",
    title: "如何使用Next.js创建React项目",
    updateTime: Date.now() - 1000 * 60 * 60 * 24 * 2,
  },
  {
    id: "3",
    title: "如何使用Next.js创建React项目",
    updateTime: Date.now() - 1000 * 60 * 60 * 24 * 2,
  },
  {
    id: "4",
    title: "如何使用Next.js创建React项目",
    updateTime: Date.now() - 1000 * 60 * 60 * 24 * 2,
  },
  {
    id: "5",
    title: "如何使用Next.js创建React项目",
    updateTime: Date.now() - 1000 * 60 * 60 * 24 * 2,
  },
  {
    id: "6",
    title: "如何使用Next.js创建React项目",
    updateTime: Date.now() - 1000 * 60 * 60 * 24 * 2,
  },
  {
    id: "7",
    title: "如何使用Next.js创建React项目",
    updateTime: Date.now() - 1000 * 60 * 60 * 24 * 2,
  },
  {
    id: "8",
    title: "如何使用Next.js创建React项目",
    updateTime: Date.now() - 1000 * 60 * 60 * 24 * 2,
  },
  {
    id: "9",
    title: "如何使用Next.js创建React项目",
    updateTime: Date.now() - 1000 * 60 * 60 * 24 * 2,
  },
  {
    id: "10",
    title: "如何使用Next.js创建React项目",
    updateTime: Date.now() - 1000 * 60 * 60 * 24 * 2,
  },
  {
    id: "11",
    title: "如何使用Next.js创建React项目",
    updateTime: Date.now() - 1000 * 60 * 60 * 24 * 2,
  },
  {
    id: "12",
    title: "如何使用Next.js创建React项目",
    updateTime: Date.now() - 1000 * 60 * 60 * 24 * 2,
  },
  {
    id: "13",
    title: "如何使用Next.js创建React项目",
    updateTime: Date.now() - 1000 * 60 * 60 * 24 * 2,
  },
  {
    id: "14",
    title: "如何使用Next.js创建React项目",
    updateTime: Date.now() - 1000 * 60 * 60 * 24 * 2,
  },
  {
    id: "15",
    title: "知行小课",
    updateTime: Date.now() + 2,
  },
];

export const list = groupByDate(chatList);
