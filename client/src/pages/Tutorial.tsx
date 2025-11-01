import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { BookOpen, Play, Settings, Download, HelpCircle } from "lucide-react";
import { Link } from "wouter";

export default function Tutorial() {
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-background via-background to-secondary/5">
      {/* 导航栏 */}
      <nav className="sticky top-0 z-50 border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex items-center justify-between h-16">
          <Link href="/" className="flex items-center gap-2 hover:opacity-80 transition-opacity">
            <div className="w-8 h-8 bg-gradient-to-br from-primary to-secondary rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-sm">MC</span>
            </div>
            <span className="font-bold text-lg">Minecraft 启动器</span>
          </Link>
          <div className="flex items-center gap-6">
            <Link href="/" className="text-sm font-medium hover:text-primary transition-colors">首页</Link>
            <Link href="/download" className="text-sm font-medium hover:text-primary transition-colors">下载</Link>
            <Link href="/tutorial" className="text-sm font-medium text-primary">教程</Link>
            <Link href="/mods" className="text-sm font-medium hover:text-primary transition-colors">模组</Link>
          </div>
        </div>
      </nav>

      {/* 主内容 */}
      <main className="flex-1">
        {/* 页面标题 */}
        <section className="container py-12 space-y-4">
          <h1 className="text-4xl md:text-5xl font-bold">使用教程</h1>
          <p className="text-lg text-muted-foreground max-w-2xl">详细的启动器使用指南，帮助您快速上手。</p>
        </section>

        {/* 快速开始 */}
        <section className="container py-12 space-y-8">
          <h2 className="text-3xl font-bold">快速开始</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card className="border-border/50">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Download className="w-5 h-5" />
                  第一步：安装启动器
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 text-sm">
                <p>访问下载页面，选择适合您操作系统的版本进行下载。</p>
                <ol className="space-y-2 list-decimal list-inside">
                  <li>点击"下载"按钮</li>
                  <li>选择您的操作系统</li>
                  <li>下载对应版本的安装程序</li>
                  <li>按照安装向导完成安装</li>
                </ol>
              </CardContent>
            </Card>

            <Card className="border-border/50">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Settings className="w-5 h-5" />
                  第二步：初始配置
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 text-sm">
                <p>首次启动启动器时，它会自动检测您的 Java 环境。</p>
                <ol className="space-y-2 list-decimal list-inside">
                  <li>打开启动器</li>
                  <li>启动器自动检测 Java</li>
                  <li>如需要，手动设置 Java 路径</li>
                  <li>配置内存分配（推荐 4GB）</li>
                </ol>
              </CardContent>
            </Card>

            <Card className="border-border/50">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Download className="w-5 h-5" />
                  第三步：下载版本
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 text-sm">
                <p>选择要游玩的 Minecraft 版本并下载。</p>
                <ol className="space-y-2 list-decimal list-inside">
                  <li>点击"Java 版"标签</li>
                  <li>选择版本（最新正式版、快照版或其他）</li>
                  <li>点击"下载版本"按钮</li>
                  <li>等待下载完成</li>
                </ol>
              </CardContent>
            </Card>

            <Card className="border-border/50">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Play className="w-5 h-5" />
                  第四步：启动游戏
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 text-sm">
                <p>版本下载完成后，您就可以启动游戏了。</p>
                <ol className="space-y-2 list-decimal list-inside">
                  <li>选择要启动的版本</li>
                  <li>点击"启动游戏"按钮</li>
                  <li>等待游戏启动</li>
                  <li>享受游戏！</li>
                </ol>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* 详细功能说明 */}
        <section className="container py-12 space-y-8">
          <h2 className="text-3xl font-bold">功能详解</h2>

          <div className="space-y-6">
            <Card className="border-border/50">
              <CardHeader>
                <CardTitle>Java 版启动</CardTitle>
                <CardDescription>启动 Minecraft Java 版游戏</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4 text-sm">
                <p>Java 版是 Minecraft 的原始版本，支持大量 Mod 和自定义内容。</p>
                <div className="space-y-3">
                  <div>
                    <p className="font-medium mb-2">版本选择：</p>
                    <ul className="list-disc list-inside space-y-1 text-muted-foreground">
                      <li><strong>最新正式版</strong>：最新的稳定版本，推荐大多数玩家使用</li>
                      <li><strong>最新快照版</strong>：最新的测试版本，包含新功能但可能有 Bug</li>
                      <li><strong>其他版本</strong>：选择特定的历史版本</li>
                    </ul>
                  </div>
                  <div>
                    <p className="font-medium mb-2">内存设置：</p>
                    <p className="text-muted-foreground">根据您的电脑配置设置 Java 虚拟机内存。推荐至少 2GB，高配电脑可设置 4GB 或更多。</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-border/50">
              <CardHeader>
                <CardTitle>基岩版启动</CardTitle>
                <CardDescription>启动 Minecraft 基岩版游戏</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4 text-sm">
                <p>基岩版是跨平台的 Minecraft 版本，支持 Windows、macOS、iOS 等多个平台。</p>
                <div className="space-y-3">
                  <div>
                    <p className="font-medium mb-2">启动方式：</p>
                    <ul className="list-disc list-inside space-y-1 text-muted-foreground">
                      <li>启动器会通过系统协议启动已安装的基岩版</li>
                      <li>确保您已从 Microsoft Store 安装基岩版</li>
                      <li>如果未安装，启动器会提示您安装</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-border/50">
              <CardHeader>
                <CardTitle>离线模式</CardTitle>
                <CardDescription>在没有网络连接的情况下游玩</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4 text-sm">
                <p>启用离线模式后，启动器将使用本地缓存的版本文件启动游戏，无需网络连接。</p>
                <div className="space-y-3">
                  <div>
                    <p className="font-medium mb-2">使用步骤：</p>
                    <ol className="list-decimal list-inside space-y-1 text-muted-foreground">
                      <li>确保版本已完整下载到本地</li>
                      <li>勾选右上角的"离线模式"复选框</li>
                      <li>选择版本并启动游戏</li>
                    </ol>
                  </div>
                  <div>
                    <p className="font-medium mb-2">注意事项：</p>
                    <ul className="list-disc list-inside space-y-1 text-muted-foreground">
                      <li>离线模式下只能使用已下载的版本</li>
                      <li>无法访问在线服务器</li>
                      <li>无法进行版本更新</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-border/50">
              <CardHeader>
                <CardTitle>版本管理</CardTitle>
                <CardDescription>管理已下载的游戏版本</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4 text-sm">
                <p>启动器提供完整的版本管理功能，让您轻松管理多个游戏版本。</p>
                <div className="space-y-3">
                  <div>
                    <p className="font-medium mb-2">管理操作：</p>
                    <ul className="list-disc list-inside space-y-1 text-muted-foreground">
                      <li><strong>查看版本</strong>：在"版本管理"部分查看所有已下载的版本</li>
                      <li><strong>删除版本</strong>：点击版本旁的"删除"按钮移除不需要的版本</li>
                      <li><strong>检查完整性</strong>：版本后显示 ✓ 表示完整，✗ 表示不完整</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* 常见问题 */}
        <section className="container py-12 space-y-8">
          <h2 className="text-3xl font-bold">常见问题</h2>

          <div className="space-y-4">
            {[
              {
                q: "启动器找不到 Java？",
                a: "请确保已安装 Java 8 或更高版本。您可以访问 java.com 或 adoptium.net 下载安装最新的 Java 运行环境。安装完成后，重启启动器即可自动检测。"
              },
              {
                q: "下载速度很慢？",
                a: "这可能是网络问题。您可以尝试更换网络环境、使用 VPN 或代理、或者稍后重试。启动器支持断点续传，如果下载中断，重新点击下载会继续之前的进度。"
              },
              {
                q: "游戏启动后立即崩溃？",
                a: "这通常是由于以下原因导致的：Java 版本不兼容（需要 Java 8+）、内存分配不足（建议至少 2GB）、显卡驱动过旧。请检查这些设置并更新驱动程序。"
              },
              {
                q: "离线模式下无法启动游戏？",
                a: "请确保版本已完整下载。在版本列表中查看版本状态，✓ 表示完整。如果显示 ✗，说明版本不完整，需要重新下载。"
              },
              {
                q: "如何卸载启动器？",
                a: "Windows：从控制面板的\"程序和功能\"中找到启动器并卸载。macOS：从应用程序文件夹中将启动器拖入废纸篓。Linux：根据安装方式（AppImage 或 Snap）进行卸载。"
              },
              {
                q: "启动器占用很多磁盘空间？",
                a: "游戏版本文件通常较大（每个版本 200MB-500MB）。如果磁盘空间不足，您可以删除不需要的版本来释放空间。"
              },
              {
                q: "能否同时运行多个游戏实例？",
                a: "可以。启动游戏后，您可以再次点击\"启动游戏\"来启动另一个实例。但请注意，这会占用更多系统资源。"
              },
              {
                q: "启动器支持 Mod 吗？",
                a: "启动器本身不包含 Mod 管理功能。但您可以手动将 Mod 放入 .minecraft/mods 目录中，启动器会自动加载它们。"
              }
            ].map((faq, idx) => (
              <Card key={idx} className="border-border/50">
                <CardHeader>
                  <CardTitle className="text-base flex items-center gap-2">
                    <HelpCircle className="w-4 h-4" />
                    {faq.q}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">{faq.a}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* 高级设置 */}
        <section className="container py-12 space-y-8">
          <h2 className="text-3xl font-bold">高级设置</h2>

          <Card className="border-border/50">
            <CardHeader>
              <CardTitle>JVM 参数</CardTitle>
              <CardDescription>高级用户可以自定义 Java 虚拟机参数</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4 text-sm">
              <p>如果您需要自定义 JVM 参数，可以在启动器的配置文件中修改。配置文件位于：</p>
              <div className="bg-muted p-3 rounded font-mono text-xs break-all">
                ~/.minecraft-launcher/config.json
              </div>
              <p>常用的 JVM 参数包括：</p>
              <ul className="list-disc list-inside space-y-1 text-muted-foreground">
                <li><code className="bg-muted px-1 rounded">-Xmx4G</code>：设置最大内存为 4GB</li>
                <li><code className="bg-muted px-1 rounded">-Xms2G</code>：设置初始内存为 2GB</li>
                <li><code className="bg-muted px-1 rounded">-XX:+UseG1GC</code>：使用 G1 垃圾回收器</li>
              </ul>
            </CardContent>
          </Card>
        </section>
      </main>

      {/* 页脚 */}
      <footer className="border-t border-border/40 bg-muted/30 mt-20">
        <div className="container py-12">
          <div className="border-t border-border/40 pt-8 text-center text-sm text-muted-foreground">
            <p>© 2025 Minecraft 启动器. 所有权利保留。</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
