export default function Home() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100">
      <main className="mx-auto flex max-w-6xl flex-col gap-12 px-6 py-20 md:px-12 lg:px-20">
        <section className="rounded-2xl border border-white/10 bg-white/5 p-10 backdrop-blur">
          <p className="text-sm uppercase tracking-[0.4em] text-indigo-300">
            Diagnóstico
          </p>
          <h1 className="mt-4 text-4xl font-semibold leading-tight text-white md:text-5xl">
            Auditoria rápida — lojatechexpress.pt
          </h1>
          <p className="mt-6 max-w-3xl text-lg leading-8 text-indigo-100">
            A homepage responde com uma página de erro crítico do WordPress,
            impedindo qualquer navegação adicional. As recomendações abaixo
            cobrem recuperação urgente, robustez futura e melhorias de
            conversão assim que o site estiver novamente ativo.
          </p>
        </section>

        <section className="grid gap-8 lg:grid-cols-[1.1fr,0.9fr]">
          <div className="space-y-6 rounded-2xl border border-white/5 bg-slate-900/70 p-8">
            <h2 className="text-2xl font-semibold text-white">
              Problemas principais detectados
            </h2>
            <ul className="space-y-4 text-base leading-7 text-slate-200">
              <li className="rounded-lg border border-red-400/40 bg-red-500/10 p-4">
                <p className="font-medium text-red-200">
                  Erro crítico do WordPress na página inicial
                </p>
                <p className="mt-2 text-sm text-red-100/90">
                  O servidor entrega o template `wp-die-message`, normalmente
                  provocado por plugins incompatíveis, atualizações incompletas
                  ou falhas de PHP.
                </p>
              </li>
              <li className="rounded-lg border border-yellow-400/40 bg-yellow-500/10 p-4">
                <p className="font-medium text-yellow-100">
                  SEO e desempenho prejudicados
                </p>
                <p className="mt-2 text-sm text-yellow-50/90">
                  `noindex` bloqueia indexação; bots e utilizadores recebem uma
                  página de erro sem conteúdo nem links, impactando ranking e
                  confiança.
                </p>
              </li>
              <li className="rounded-lg border border-cyan-400/40 bg-cyan-500/10 p-4">
                <p className="font-medium text-cyan-100">
                  Ausência de monitorização proactiva
                </p>
                <p className="mt-2 text-sm text-cyan-50/90">
                  Não há evidências de monitorização ou fallback — o erro
                  provavelmente passou despercebido até clientes reportarem.
                </p>
              </li>
            </ul>
          </div>

          <div className="rounded-2xl border border-white/5 bg-slate-900/70 p-8">
            <h2 className="text-2xl font-semibold text-white">
              Prioridades imediatas (0-24h)
            </h2>
            <ol className="mt-6 space-y-5 text-base leading-7 text-slate-200">
              <li className="rounded-xl border border-indigo-400/40 bg-indigo-500/10 p-4">
                <p className="font-semibold text-indigo-100">
                  1. Activar modo de recuperação e recolher registos
                </p>
                <p className="mt-2 text-sm text-indigo-50/90">
                  No painel de controlo, aceda ao modo de recuperação via
                  <code className="ml-2 rounded bg-black/40 px-2 py-0.5 text-xs">
                    wp-login.php?action=enter_recovery_mode
                  </code>{" "}
                  utilizando o link enviado por e-mail, e descarregue os logs
                  recentes em <code className="rounded bg-black/40 px-2 py-0.5 text-xs">wp-content/debug.log</code>.
                </p>
              </li>
              <li className="rounded-xl border border-indigo-400/40 bg-indigo-500/10 p-4">
                <p className="font-semibold text-indigo-100">
                  2. Desactivar plugins problemáticos
                </p>
                <p className="mt-2 text-sm text-indigo-50/90">
                  Aceda ao gestor de plugins ou renomeie a pasta
                  <code className="ml-2 rounded bg-black/40 px-2 py-0.5 text-xs">
                    wp-content/plugins
                  </code>{" "}
                  via FTP/SSH, reactivando um a um até identificar o
                  responsável. Valide também o tema activo.
                </p>
              </li>
              <li className="rounded-xl border border-indigo-400/40 bg-indigo-500/10 p-4">
                <p className="font-semibold text-indigo-100">
                  3. Criar cópia de segurança completa
                </p>
                <p className="mt-2 text-sm text-indigo-50/90">
                  Antes de qualquer actualização estrutural, exporte a base de
                  dados e ficheiros. Utilize duplicator, UpdraftPlus ou backup
                  manual via cPanel/SSH.
                </p>
              </li>
            </ol>
          </div>
        </section>

        <section className="rounded-2xl border border-white/5 bg-slate-900/70 p-8">
          <h2 className="text-2xl font-semibold text-white">
            Plano de recuperação completa (24h - 7 dias)
          </h2>
          <div className="mt-6 grid gap-6 md:grid-cols-2">
            <article className="rounded-xl border border-emerald-400/40 bg-emerald-500/10 p-6">
              <h3 className="text-lg font-semibold text-emerald-100">
                Estabilidade técnica
              </h3>
              <ul className="mt-4 space-y-3 text-sm text-emerald-50/90">
                <li>
                  Actualizar WordPress, tema e plugins para versões compatíveis
                  após testes em staging.
                </li>
                <li>
                  Activar logs persistentes (
                  <code className="rounded bg-black/40 px-2 py-0.5 text-xs">
                    WP_DEBUG_LOG
                  </code>
                  ) e integrações com ferramentas de monitorização.
                </li>
                <li>
                  Configurar protecção de falhas com plugin de monitorização
                  (ex.: ManageWP, Jetpack Monitor).
                </li>
              </ul>
            </article>
            <article className="rounded-xl border border-sky-400/40 bg-sky-500/10 p-6">
              <h3 className="text-lg font-semibold text-sky-100">
                Performance e SEO
              </h3>
              <ul className="mt-4 space-y-3 text-sm text-sky-50/90">
                <li>
                  Remover `noindex` e configurar meta tags/canonical assim que o
                  site estiver estável.
                </li>
                <li>
                  Implementar cache e CDN (Cloudflare, LiteSpeed) para reduzir
                  TTFB.
                </li>
                <li>
                  Optimizar Core Web Vitals: lazy loading, compressão de
                  imagens, eliminação de CSS/JS bloqueante.
                </li>
              </ul>
            </article>
            <article className="rounded-xl border border-fuchsia-400/40 bg-fuchsia-500/10 p-6 md:col-span-2">
              <h3 className="text-lg font-semibold text-fuchsia-100">
                Conversão e UX após restauro
              </h3>
              <ul className="mt-4 space-y-3 text-sm text-fuchsia-50/90">
                <li>
                  Reforçar página inicial com prova social, categorias em
                  destaque e call-to-action claros.
                </li>
                <li>
                  Garantir checkout rápido com indicadores de segurança,
                  métodos de pagamento visíveis e política de devolução
                  transparente.
                </li>
                <li>
                  Lançar campanhas de recuperação de tráfego (Google Ads,
                  Meta) apenas após confirmar estabilidade do site.
                </li>
              </ul>
            </article>
          </div>
        </section>

        <section className="rounded-2xl border border-white/5 bg-slate-900/70 p-8">
          <h2 className="text-2xl font-semibold text-white">
            Checklist técnico adicional
          </h2>
          <div className="mt-6 grid gap-6 md:grid-cols-2">
            <div className="space-y-3">
              <h3 className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-300">
                Segurança
              </h3>
              <ul className="space-y-2 text-sm text-slate-200">
                <li>Forçar HTTPS e HSTS no servidor.</li>
                <li>
                  Revisar permissões de ficheiros (644 para ficheiros, 755 para
                  pastas).
                </li>
                <li>
                  Implementar firewall de aplicação (Wordfence, Cloudflare WAF).
                </li>
              </ul>
            </div>
            <div className="space-y-3">
              <h3 className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-300">
                Continuidade
              </h3>
              <ul className="space-y-2 text-sm text-slate-200">
                <li>Agendar backups automáticos diários + off-site.</li>
                <li>
                  Preparar ambiente de staging para testes antes de publicar.
                </li>
                <li>
                  Configurar alertas de uptime (UptimeRobot, Better Uptime).
                </li>
              </ul>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
