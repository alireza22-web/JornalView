export function ProgressBar({ title, value, max,type }) {
  const percent = Math.min((value / max) * 100, 100);
  
  return (
    <div className="space-y-2">
      <div className="flex justify-between text-sm">
        <span>{title}</span>
        <span>
          {value.toFixed(2)} / {max.toFixed(2)}
        </span>
      </div>

      <div className="w-full h-4 rounded-full bg-zinc-700 overflow-hidden">
        <div
          className={`
            h-full rounded-full transition-all duration-500
            ${
              type == 'profit' ? 
              percent < 50 ? 'bg-green-300' : percent < 80 ? 'bg-green-500' : 'bg-green-700'              :
              percent < 50 ? "bg-green-500" : percent < 80 ? "bg-yellow-500": "bg-red-500"
            }
          `}
          style={{
            width: `${percent}%`,
          }}
        />
      </div>
    </div>
  );
}