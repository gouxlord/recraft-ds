

const ColorsSection = () => {
  return (
    <section className="mb-12">
      <h2 className="font-heading text-2xl font-semibold text-gray-900 mb-8">Palette de couleurs</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {/* Primary Colors */}
        <div className="space-y-3">
          <h3 className="font-semibold text-gray-900">Primary (Violet)</h3>
          <div className="space-y-2">
            {[
              { shade: 50, hex: '#F3EFFD' },
              { shade: 100, hex: '#E7DFFB' },
              { shade: 200, hex: '#D0BFF6' },
              { shade: 300, hex: '#B99FF2' },
              { shade: 400, hex: '#B18AF9' },
              { shade: 500, hex: '#9B6FE8' },
              { shade: 600, hex: '#8556D6' },
              { shade: 700, hex: '#6E3DC4' },
              { shade: 800, hex: '#5728A3' },
              { shade: 900, hex: '#411C82' }
            ].map(({ shade, hex }) => (
              <div key={shade} className="flex items-center gap-3 group hover:bg-gray-50 p-2 rounded transition-colors">
                <div 
                  className="w-12 h-8 rounded shadow-sm border border-gray-200"
                  style={{ backgroundColor: hex }}
                ></div>
                <div className="flex-1">
                  <div className="flex justify-between items-center">
                    <span className="text-sm font-medium text-gray-900">{shade}</span>
                    <span className="text-xs text-gray-500 font-mono">{hex}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Secondary Colors */}
        <div className="space-y-3">
          <h3 className="font-semibold text-gray-900">Secondary (Orange)</h3>
          <div className="space-y-2">
            {[
              { shade: 50, hex: '#FFF3EF' },
              { shade: 100, hex: '#FFE7DE' },
              { shade: 200, hex: '#FFCFBD' },
              { shade: 300, hex: '#FFB79C' },
              { shade: 400, hex: '#FF9F7B' },
              { shade: 500, hex: '#FF6D33' },
              { shade: 600, hex: '#FF4500' },
              { shade: 700, hex: '#CC3700' },
              { shade: 800, hex: '#992900' },
              { shade: 900, hex: '#661B00' }
            ].map(({ shade, hex }) => (
              <div key={shade} className="flex items-center gap-3 group hover:bg-gray-50 p-2 rounded transition-colors">
                <div 
                  className="w-12 h-8 rounded shadow-sm border border-gray-200"
                  style={{ backgroundColor: hex }}
                ></div>
                <div className="flex-1">
                  <div className="flex justify-between items-center">
                    <span className="text-sm font-medium text-gray-900">{shade}</span>
                    <span className="text-xs text-gray-500 font-mono">{hex}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Gray Colors */}
        <div className="space-y-3">
          <h3 className="font-semibold text-gray-900">Gray</h3>
          <div className="space-y-2">
            {[
              { shade: 50, hex: '#F9FAFB' },
              { shade: 100, hex: '#F3F4F6' },
              { shade: 200, hex: '#E5E7EB' },
              { shade: 300, hex: '#D1D5DB' },
              { shade: 400, hex: '#9CA3AF' },
              { shade: 500, hex: '#6B7280' },
              { shade: 600, hex: '#4B5563' },
              { shade: 700, hex: '#374151' },
              { shade: 800, hex: '#1F2937' },
              { shade: 900, hex: '#111827' }
            ].map(({ shade, hex }) => (
              <div key={shade} className="flex items-center gap-3 group hover:bg-gray-50 p-2 rounded transition-colors">
                <div 
                  className="w-12 h-8 rounded shadow-sm border border-gray-200"
                  style={{ backgroundColor: hex }}
                ></div>
                <div className="flex-1">
                  <div className="flex justify-between items-center">
                    <span className="text-sm font-medium text-gray-900">{shade}</span>
                    <span className="text-xs text-gray-500 font-mono">{hex}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Semantic Colors */}
        <div className="space-y-3">
          <h3 className="font-semibold text-gray-900">Sémantiques</h3>
          <div className="space-y-2">
            {/* Success */}
            <div className="space-y-1">
              <h4 className="text-sm font-medium text-success-700">Success</h4>
              {[
                { shade: 50, hex: '#F0FDF4' },
                { shade: 500, hex: '#22C55E' },
                { shade: 600, hex: '#16A34A' },
                { shade: 700, hex: '#15803D' }
              ].map(({ shade, hex }) => (
                <div key={shade} className="flex items-center gap-3 group hover:bg-gray-50 p-1 rounded transition-colors">
                  <div 
                    className="w-8 h-6 rounded shadow-sm border border-gray-200"
                    style={{ backgroundColor: hex }}
                  ></div>
                  <span className="text-xs font-medium text-gray-900">{shade}</span>
                  <span className="text-xs text-gray-500 font-mono">{hex}</span>
                </div>
              ))}
            </div>

            {/* Warning */}
            <div className="space-y-1 mt-3">
              <h4 className="text-sm font-medium text-warning-700">Warning</h4>
              {[
                { shade: 50, hex: '#FFFBEB' },
                { shade: 500, hex: '#F59E0B' },
                { shade: 600, hex: '#D97706' },
                { shade: 700, hex: '#B45309' }
              ].map(({ shade, hex }) => (
                <div key={shade} className="flex items-center gap-3 group hover:bg-gray-50 p-1 rounded transition-colors">
                  <div 
                    className="w-8 h-6 rounded shadow-sm border border-gray-200"
                    style={{ backgroundColor: hex }}
                  ></div>
                  <span className="text-xs font-medium text-gray-900">{shade}</span>
                  <span className="text-xs text-gray-500 font-mono">{hex}</span>
                </div>
              ))}
            </div>

            {/* Error */}
            <div className="space-y-1 mt-3">
              <h4 className="text-sm font-medium text-error-700">Error</h4>
              {[
                { shade: 50, hex: '#FEF2F2' },
                { shade: 500, hex: '#EF4444' },
                { shade: 600, hex: '#DC2626' },
                { shade: 700, hex: '#B91C1C' }
              ].map(({ shade, hex }) => (
                <div key={shade} className="flex items-center gap-3 group hover:bg-gray-50 p-1 rounded transition-colors">
                  <div 
                    className="w-8 h-6 rounded shadow-sm border border-gray-200"
                    style={{ backgroundColor: hex }}
                  ></div>
                  <span className="text-xs font-medium text-gray-900">{shade}</span>
                  <span className="text-xs text-gray-500 font-mono">{hex}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ColorsSection;