import type { Level, Key, ThemePalette, ColorPalette } from '../types'

const paletteToStyle = (level: Level, palette: ColorPalette) => {
    if (palette) {
        return Object.keys(palette)
            .map((key) => {
                return `--${level}-${key}: ${palette[key as Key]}`
            })
            .join(`;\r\n`)
    }
}

const individualPalette = (themePalette: ThemePalette) => {
    if (themePalette) {
        return Object.entries(themePalette).map(([key, value]) => {
            return paletteToStyle(key as Level, value)
        }).join(`;\r\n`)
    }
}

export default defineNuxtPlugin(nuxtApp => {
    const theme = useAppConfig()?.layer?.theme
    const style = individualPalette(theme)
    if (style) {
        useHead({
            style: [
                {
                    children: `:root, body { ${style}}`
                }
            ]
        })
    }
})