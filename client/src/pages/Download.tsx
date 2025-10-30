import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Download, Monitor, Apple, Code, CheckCircle2 } from "lucide-react";
import { Link } from "wouter";

export default function DownloadPage() {
  const downloads = [
    {
      os: "Windows",
      icon: <Monitor className="w-8 h-8" />,
      versions: [
        { name: "Windows 10/11 (64-bit)", file: "minecraft-launcher-1.0.0-win-x64.exe", size: "120 MB" },
        { name: "Windows 10/11 (32-bit)", file: "minecraft-launcher-1.0.0-win-ia32.exe", size: "110 MB" }
      ]
    },
    {
      os: "macOS",
      icon: <Apple className="w-8 h-8" />,
      versions: [
        { name: "macOS 10.13+ (Intel)", file: "minecraft-launcher-1.0.0-mac-x64.dmg", size: "130 MB" },
        { name: "macOS 11+ (Apple Silicon)", file: "minecraft-launcher-1.0.0-mac-arm64.dmg", size: "125 MB" }
      ]
    },
    {
      os: "Linux",
      icon: <Code className="w-8 h-8" />,
      versions: [
        { name: "Linux (AppImage)", file: "minecraft-launcher-1.0.0-linux-x64.AppImage", size: "115 MB" },
        { name: "Linux (Snap)", file: "minecraft-launcher-snap", size: "在线安装" }
      ]
    }
  ];

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
            <Link href="/download" className="text-sm font-medium text-primary">下载</Link>
            <Link href="/tutorial" className="text-sm font-medium hover:text-primary transition-colors">教程</Link>
          </div>
        </div>
      </nav>

      {/* 主内容 */}
      <main className="flex-1">
        {/* 页面标题 */}
        <section className="container py-12 space-y-4">
          <h1 className="text-4xl md:text-5xl font-bold">下载启动器</h1>
          <p className="text-lg text-muted-foreground max-w-2xl">选择适合您操作系统的版本下载。所有版本均为最新 1.0.0 版本。</p>
        </section>

        {/* 下载选项 */}
        <section className="container py-12 space-y-12">
          {downloads.map((platform, idx) => (
            <div key={idx} className="space-y-6">
              <div className="flex items-center gap-3">
                <div className="p-3 bg-primary/10 rounded-lg text-primary">
                  {platform.icon}
                </div>
                <h2 className="text-2xl font-bold">{platform.os}</h2>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {platform.versions.map((version, vIdx) => (
                  <Card key={vIdx} className="border-border/50 hover:border-primary/50 transition-colors">
                    <CardHeader>
                      <CardTitle className="text-lg">{version.name}</CardTitle>
                      <CardDescription>{version.size}</CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div className="text-sm text-muted-foreground break-all font-mono bg-muted p-3 rounded">
                        {version.file}
                      </div>
                      <Button className="w-full gap-2">
                        <Download className="w-4 h-4" />
                        下载
                      </Button>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          ))}
        </section>

        {/* 安装说明 */}
        <section className="container py-12 space-y-8">
          <h2 className="text-3xl font-bold">安装说明</h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="border-border/50">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Monitor className="w-5 h-5" />
                  Windows
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 text-sm">
                <ol className="space-y-3 list-decimal list-inside">
                  <li>下载 .exe 文件</li>
                  <li>双击运行安装程序</li>
                  <li>按照提示完成安装</li>
                  <li>安装完成后自动启动启动器</li>
                </ol>
              </CardContent>
            </Card>

            <Card className="border-border/50">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Apple className="w-5 h-5" />
                  macOS
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 text-sm">
                <ol className="space-y-3 list-decimal list-inside">
                  <li>下载 .dmg 文件</li>
                  <li>双击打开 DMG 镜像</li>
                  <li>将应用拖入 Applications 文件夹</li>
                  <li>从 Applications 中打开应用</li>
                </ol>
              </CardContent>
            </Card>

            <Card className="border-border/50">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Code className="w-5 h-5" />
                  Linux
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 text-sm">
                <ol className="space-y-3 list-decimal list-inside">
                  <li>下载 AppImage 文件</li>
                  <li>右键点击，选择属性</li>
                  <li>在权限标签中勾选"作为程序执行"</li>
                  <li>双击运行应用</li>
                </ol>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* 系统要求 */}
        <section className="container py-12 space-y-8">
          <h2 className="text-3xl font-bold">系统要求</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card className="border-border/50">
              <CardHeader>
                <CardTitle>最低要求</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="font-medium">操作系统</p>
                    <p className="text-sm text-muted-foreground">Windows 10+, macOS 10.13+, Linux</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="font-medium">Java</p>
                    <p className="text-sm text-muted-foreground">Java 8 或更高版本</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="font-medium">内存</p>
                    <p className="text-sm text-muted-foreground">至少 2GB RAM</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="font-medium">磁盘</p>
                    <p className="text-sm text-muted-foreground">至少 5GB 可用空间</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-border/50">
              <CardHeader>
                <CardTitle>推荐配置</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-blue-500 mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="font-medium">操作系统</p>
                    <p className="text-sm text-muted-foreground">Windows 11, macOS 12+, Ubuntu 22.04+</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-blue-500 mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="font-medium">Java</p>
                    <p className="text-sm text-muted-foreground">Java 17 或更高版本</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-blue-500 mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="font-medium">内存</p>
                    <p className="text-sm text-muted-foreground">8GB+ RAM</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-blue-500 mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="font-medium">磁盘</p>
                    <p className="text-sm text-muted-foreground">20GB+ 可用空间</p>
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
                a: "请确保已安装 Java 8 或更高版本。可以访问 java.com 或 adoptium.net 下载安装。"
              },
              {
                q: "下载速度很慢？",
                a: "这可能是网络问题。可以尝试更换网络环境、使用 VPN 或稍后重试。"
              },
              {
                q: "游戏启动后立即崩溃？",
                a: "这通常是由于 Java 版本不兼容、内存分配不足或显卡驱动过旧导致的。请检查这些设置。"
              },
              {
                q: "如何卸载启动器？",
                a: "Windows：从控制面板的程序和功能中卸载。macOS：从应用程序文件夹中删除。Linux：根据安装方式卸载。"
              }
            ].map((faq, idx) => (
              <Card key={idx} className="border-border/50">
                <CardHeader>
                  <CardTitle className="text-base">{faq.q}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">{faq.a}</p>
                </CardContent>
              </Card>
            ))}
          </div>
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
