const fs = require("fs");
const file = "src/App.jsx";
let content = fs.readFileSync(file, "utf8");

const freshZones = `</div>
        {/* Абсолютно невидимые сенсорные зоны на уровне Root-экрана */}
        {isFullscreen && (
          <div className="absolute inset-0 flex z-50 pointer-events-none w-screen h-screen">
            <div 
              onClick={() => { if (currentSlide > 0) setCurrentSlide(currentSlide - 1); }} 
              className="w-1/2 h-full pointer-events-auto select-none"
              style={{ cursor: "w-resize" }}
            />
            <div 
              onClick={() => { if (currentSlide < slides.length - 1) setCurrentSlide(currentSlide + 1); }} 
              className="w-1/2 h-full pointer-events-auto select-none"
              style={{ cursor: "e-resize" }}
            />
          </div>
        )}
      </div>

      <div className="flex items-center gap-6 mt-8 py-3 px-8 rounded-full neumorphic-item">`;

const parts = content.split("</div>
      </div>

      <div className="flex items-center gap-6 mt-8 py-3 px-8 rounded-full neumorphic-item">");
if (parts.length > 1) {
  content = parts[0] + freshZones + parts[1];
  fs.writeFileSync(file, content, "utf8");
  console.log("UI обновлен успешно!");
} else {
  console.error("Ошибка: не удалось найти целевой блок для замены.");
}