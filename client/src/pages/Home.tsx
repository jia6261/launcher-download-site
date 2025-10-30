import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Download, BookOpen, Zap, Shield, Users, ArrowRight } from "lucide-react";
import { Link } from "wouter";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-background via-background to-secondary/5">
      {/* 导航栏 */}
      <nav className="sticky top-0 z-50 border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex items-center justify-between h-16">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-gradient-to-br from-primary to-secondary rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-sm">MC</span>
            </div>
            <span className="font-bold text-lg">Minecraft 启动器</span>
          </div>
          <div className="flex items-center gap-6">
            <Link href="/download" className="text-sm font-medium hover:text-primary transition-colors">下载</Link>
            <Link href="/tutorial" className="text-sm font-medium hover:text-primary transition-colors">教程</Link>
            <a href="#features" className="text-sm font-medium hover:text-primary transition-colors">功能</a>
          </div>
        </div>
      </nav>

      {/* 主内容 */}
      <main className="flex-1">
        {/* Hero 部分 */}
        <section className="container py-20 md:py-32">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="space-y-2">
                <h1 className="text-4xl md:text-5xl font-bold tracking-tight">Minecraft 启动器</h1>
                <p className="text-xl text-muted-foreground">支持 Java 版和基岩版，离线可用，全自动下载</p>
              </div>
              <p className="text-base text-muted-foreground leading-relaxed">
                一个功能完整的 Minecraft 启动器，支持自动下载版本、离线运行、版本管理等功能。无需复杂配置，一键启动游戏。
              </p>
              <div className="flex gap-4 pt-4">
                <Link href="/download">
                  <Button size="lg" className="gap-2">
                    <Download className="w-4 h-4" />
                    立即下载
                  </Button>
                </Link>
                <Link href="/tutorial">
                  <Button size="lg" variant="outline" className="gap-2">
                    <BookOpen className="w-4 h-4" />
                    查看教程
                  </Button>
                </Link>
              </div>
            </div>
            <div className="relative h-96 bg-gradient-to-br from-primary/10 to-secondary/10 rounded-2xl border border-border flex items-center justify-center">
              <div className="text-center space-y-4">
                <div className="text-6xl">🎮</div>
                <p className="text-muted-foreground">启动器界面预览</p>
              </div>
            </div>
          </div>
        </section>

        {/* 功能特性 */}
        <section id="features" className="container py-20 space-y-12">
          <div className="text-center space-y-4">
            <h2 className="text-3xl md:text-4xl font-bold">核心功能</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">提供全面的 Minecraft 游戏管理和启动功能</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                icon: <Zap className="w-6 h-6" />,
                title: "自动下载",
                description: "一键下载最新版本，自动管理游戏文件和资源"
              },
              {
                icon: <Shield className="w-6 h-6" />,
                title: "离线模式",
                description: "下载后可完全离线运行，无需网络连接"
              },
              {
                icon: <Users className="w-6 h-6" />,
                title: "双版本支持",
                description: "同时支持 Java 版和基岩版游戏"
              },
              {
                icon: <BookOpen className="w-6 h-6" />,
                title: "版本管理",
                description: "轻松管理多个游戏版本，随时切换"
              },
              {
                icon: <Download className="w-6 h-6" />,
                title: "快速启动",
                description: "优化的启动流程，快速进入游戏"
              },
              {
                icon: <Zap className="w-6 h-6" />,
                title: "跨平台",
                description: "支持 Windows、macOS 和 Linux"
              }
            ].map((feature, idx) => (
              <Card key={idx} className="border-border/50 hover:border-primary/50 transition-colors">
                <CardHeader>
                  <div className="flex items-start gap-4">
                    <div className="p-2 bg-primary/10 rounded-lg text-primary">
                      {feature.icon}
                    </div>
                    <CardTitle className="text-lg">{feature.title}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* 快速开始 */}
        <section className="container py-20 space-y-12">
          <div className="text-center space-y-4">
            <h2 className="text-3xl md:text-4xl font-bold">快速开始</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">三个简单步骤，开始您的 Minecraft 之旅</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                step: "1",
                title: "下载启动器",
                description: "从下方下载适合您操作系统的启动器版本"
              },
              {
                step: "2",
                title: "安装并打开",
                description: "安装启动器，打开后自动检测 Java 环境"
              },
              {
                step: "3",
                title: "下载并启动",
                description: "选择版本，一键下载并启动游戏"
              }
            ].map((item, idx) => (
              <div key={idx} className="relative">
                <div className="flex flex-col items-center text-center space-y-4">
                  <div className="w-12 h-12 rounded-full bg-primary text-white flex items-center justify-center font-bold text-lg">
                    {item.step}
                  </div>
                  <div className="space-y-2">
                    <h3 className="font-semibold text-lg">{item.title}</h3>
                    <p className="text-muted-foreground">{item.description}</p>
                  </div>
                </div>
                {idx < 2 && (
                  <div className="hidden md:block absolute top-6 -right-4 text-2xl text-muted-foreground">
                    <ArrowRight className="w-6 h-6" />
                  </div>
                )}
              </div>
            ))}
          </div>

          <div className="flex justify-center pt-8">
            <Link href="/download">
              <Button size="lg" className="gap-2">
                <Download className="w-4 h-4" />
                现在下载
              </Button>
            </Link>
          </div>
        </section>

        {/* 系统要求 */}
        <section className="container py-20 space-y-12">
          <div className="text-center space-y-4">
            <h2 className="text-3xl md:text-4xl font-bold">系统要求</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card className="border-border/50">
              <CardHeader>
                <CardTitle>最低要求</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3 text-sm">
                <div>• 操作系统：Windows 10+, macOS 10.13+, Linux</div>
                <div>• Java：Java 8 或更高版本</div>
                <div>• 内存：至少 2GB RAM</div>
                <div>• 磁盘：至少 5GB 可用空间</div>
              </CardContent>
            </Card>

            <Card className="border-border/50">
              <CardHeader>
                <CardTitle>推荐配置</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3 text-sm">
                <div>• 操作系统：Windows 11, macOS 12+, Linux (Ubuntu 22.04+)</div>
                <div>• Java：Java 17+</div>
                <div>• 内存：8GB+ RAM</div>
                <div>• 磁盘：20GB+ 可用空间</div>
              </CardContent>
            </Card>
          </div>
        </section>
      </main>

      {/* 页脚 */}
      <footer className="border-t border-border/40 bg-muted/30 mt-20">
        <div className="container py-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
            <div className="space-y-4">
              <h3 className="font-semibold">关于</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><a href="#" className="hover:text-foreground transition-colors">项目简介</a></li>
                <li><a href="#" className="hover:text-foreground transition-colors">功能特性</a></li>
              </ul>
            </div>
            <div className="space-y-4">
              <h3 className="font-semibold">资源</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><Link href="/download" className="hover:text-foreground transition-colors">下载</Link></li>
                <li><Link href="/tutorial" className="hover:text-foreground transition-colors">教程</Link></li>
              </ul>
            </div>
            <div className="space-y-4">
              <h3 className="font-semibold">社区</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><a href="#" className="hover:text-foreground transition-colors">GitHub</a></li>
                <li><a href="#" className="hover:text-foreground transition-colors">问题反馈</a></li>
              </ul>
            </div>
            <div className="space-y-4">
              <h3 className="font-semibold">法律</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><a href="#" className="hover:text-foreground transition-colors">隐私政策</a></li>
                <li><a href="#" className="hover:text-foreground transition-colors">使用条款</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-border/40 pt-8 text-center text-sm text-muted-foreground">
            <p>© 2025 Minecraft 启动器. 所有权利保留。</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
