import type { Metadata } from 'next';
import './globals.css';
export const metadata: Metadata = { title: '家底 · 家庭财务全景', description: '以家庭为单位，看清资产负债，理解指标，比较财务选择。模拟数据 / 原型演示。' };
export default function RootLayout({ children }: { children: React.ReactNode }) { return <html lang="zh-CN"><body>{children}</body></html>; }
