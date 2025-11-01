import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Download, Zap, BookOpen, Star, Package } from "lucide-react";
import { Link } from "wouter";

export default function Mods() {
  const mods = [
    {
      name: "AI Builder",
      version: "1.0.0",
      mcVersion: "1.21",
      description: "一个强大的 AI 驱动的建筑模组，使用 AI API 自动生成建筑结构。",
      features: [
        "AI 自动建筑生成",
        "支持多种建筑风格",
        "实时预览功能",
        "自定义参数调整"
      ],
      downloads: 1250,
      rating: 4.8,
      author: "Manus AI",
      file: "minecraft-ai-builder-1.0.0.jar",
      size: "8.9 MB"
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
            <Link href="/download" className="text-sm font-medium hover:text-primary transition-colors">下载</Link>
            <Link href="/tutorial" className="text-sm font-medium hover:text-primary transition-colors">教程</Link>
            <Link href="/mods" className="text-sm font-medium text-primary">模组</Link>
          </div>
        </div>
      </nav>

      {/* 主内容 */}
      <main className="flex-1">
        {/* 页面标题 */}
        <section className="container py-12 space-y-4">
          <h1 className="text-4xl md:text-5xl font-bold">Minecraft 模组库</h1>
          <p className="text-lg text-muted-foreground max-w-2xl">精选优质模组，增强您的 Minecraft 游戏体验。</p>
        </section>

        {/* 模组列表 */}
        <section className="container py-12 space-y-8">
          {mods.map((mod, idx) => (
            <Card key={idx} className="border-border/50 overflow-hidden hover:border-primary/50 transition-colors">
              <CardHeader className="pb-4">
                <div className="flex items-start justify-between">
                  <div className="space-y-2 flex-1">
                    <div className="flex items-center gap-3">
                      <CardTitle className="text-2xl">{mod.name}</CardTitle>
                      <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium">
                        v{mod.version}
                      </span>
                      <span className="px-3 py-1 bg-secondary/10 text-secondary rounded-full text-sm font-medium">
                        MC {mod.mcVersion}
                      </span>
                    </div>
                    <CardDescription className="text-base">{mod.description}</CardDescription>
                  </div>
                  <div className="text-right space-y-2">
                    <div className="flex items-center gap-1 justify-end">
                      <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                      <span className="font-semibold">{mod.rating}</span>
                    </div>
                    <p className="text-sm text-muted-foreground">{mod.downloads.toLocaleString()} 次下载</p>
                  </div>
                </div>
              </CardHeader>

              <CardContent className="space-y-6">
                {/* 模组特性 */}
                <div className="space-y-3">
                  <h3 className="font-semibold text-lg">主要特性</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    {mod.features.map((feature, fIdx) => (
                      <div key={fIdx} className="flex items-center gap-2">
                        <Zap className="w-4 h-4 text-primary flex-shrink-0" />
                        <span className="text-sm">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* 模组信息 */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 py-4 border-y border-border/40">
                  <div>
                    <p className="text-xs text-muted-foreground mb-1">作者</p>
                    <p className="font-medium">{mod.author}</p>
                  </div>
                  <div>
                    <p className="text-xs text-muted-foreground mb-1">文件大小</p>
                    <p className="font-medium">{mod.size}</p>
                  </div>
                  <div>
                    <p className="text-xs text-muted-foreground mb-1">版本</p>
                    <p className="font-medium">v{mod.version}</p>
                  </div>
                  <div>
                    <p className="text-xs text-muted-foreground mb-1">MC 版本</p>
                    <p className="font-medium">{mod.mcVersion}</p>
                  </div>
                </div>

                {/* 下载按钮 */}
                <div className="flex gap-3">
                  <a href={`/mods/${mod.file}`} download>
                    <Button size="lg" className="gap-2">
                      <Download className="w-4 h-4" />
                      下载模组
                    </Button>
                  </a>
                  <Link href="/tutorial">
                    <Button size="lg" variant="outline" className="gap-2">
                      <BookOpen className="w-4 h-4" />
                      安装教程
                    </Button>
                  </Link>
                </div>
              </CardContent>
            </Card>
          ))}
        </section>

        {/* 模组安装指南 */}
        <section className="container py-12 space-y-8">
          <h2 className="text-3xl font-bold">模组安装指南</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card className="border-border/50">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Package className="w-5 h-5" />
                  使用 Forge
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 text-sm">
                <ol className="space-y-3 list-decimal list-inside">
                  <li>下载并安装 Minecraft Forge（对应游戏版本）</li>
                  <li>启动一次 Forge 版本以生成 mods 文件夹</li>
                  <li>将下载的模组 .jar 文件放入 mods 文件夹</li>
                  <li>启动游戏，模组将自动加载</li>
                </ol>
              </CardContent>
            </Card>

            <Card className="border-border/50">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Package className="w-5 h-5" />
                  使用 Fabric
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 text-sm">
                <ol className="space-y-3 list-decimal list-inside">
                  <li>下载并安装 Fabric Loader（对应游戏版本）</li>
                  <li>启动一次 Fabric 版本以生成 mods 文件夹</li>
                  <li>将下载的模组 .jar 文件放入 mods 文件夹</li>
                  <li>启动游戏，模组将自动加载</li>
                </ol>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* AI Builder 详细说明 */}
        <section className="container py-12 space-y-8">
          <h2 className="text-3xl font-bold">AI Builder 详细说明</h2>

          <Card className="border-border/50">
            <CardHeader>
              <CardTitle>功能介绍</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 text-sm">
              <p>AI Builder 是一个革命性的 Minecraft 模组，它利用先进的 AI 技术自动生成复杂的建筑结构。无论您是新手还是经验丰富的建筑师，这个模组都能帮助您快速创建令人印象深刻的建筑。</p>
              <div className="space-y-3">
                <div>
                  <p className="font-medium mb-2">核心功能：</p>
                  <ul className="list-disc list-inside space-y-1 text-muted-foreground">
                    <li>使用 AI API 自动生成建筑设计</li>
                    <li>支持多种建筑风格（现代、古典、奇幻等）</li>
                    <li>实时 3D 预览生成的建筑</li>
                    <li>灵活的参数调整，自定义建筑大小和风格</li>
                    <li>一键生成，自动放置方块</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="border-border/50">
            <CardHeader>
              <CardTitle>使用方法</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 text-sm">
              <ol className="space-y-3 list-decimal list-inside">
                <li>安装模组后，启动游戏</li>
                <li>在游戏中按 <code className="bg-muted px-1 rounded">K</code> 键打开 AI Builder 界面</li>
                <li>选择建筑风格和大小参数</li>
                <li>点击"生成建筑"按钮</li>
                <li>在预览中确认设计，点击"放置"完成建筑</li>
              </ol>
            </CardContent>
          </Card>

          <Card className="border-border/50">
            <CardHeader>
              <CardTitle>系统要求</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 text-sm">
              <ul className="space-y-2 list-disc list-inside text-muted-foreground">
                <li>Minecraft 1.21（Java 版）</li>
                <li>Forge 或 Fabric 加载器</li>
                <li>至少 4GB 内存分配给 Minecraft</li>
                <li>稳定的网络连接（用于 AI API 调用）</li>
              </ul>
            </CardContent>
          </Card>

          <Card className="border-border/50">
            <CardHeader>
              <CardTitle>常见问题</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 text-sm">
              <div className="space-y-3">
                <div>
                  <p className="font-medium mb-1">Q: 模组无法加载？</p>
                  <p className="text-muted-foreground">A: 请确保您已正确安装 Forge/Fabric，并且 Minecraft 版本为 1.21。</p>
                </div>
                <div>
                  <p className="font-medium mb-1">Q: 生成建筑时出错？</p>
                  <p className="text-muted-foreground">A: 请检查网络连接和 API 配置。确保有足够的内存和空间来放置建筑。</p>
                </div>
                <div>
                  <p className="font-medium mb-1">Q: 可以自定义建筑风格吗？</p>
                  <p className="text-muted-foreground">A: 可以。在模组配置文件中可以调整 AI 参数和建筑风格选项。</p>
                </div>
              </div>
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
