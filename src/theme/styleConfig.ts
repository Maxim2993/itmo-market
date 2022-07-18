export { }

declare module '@mui/material/styles' {

    interface TypographyVariants {
        title: React.CSSProperties;
        btnContent: React.CSSProperties;
        textlink2: React.CSSProperties;
    }

    interface PaletteColor {
        disabled: string;
    }

    interface TypographyVariantsOptions {
        title?: React.CSSProperties;
        btnContent?: React.CSSProperties;
        textlink2?: React.CSSProperties;
    }

}

declare module '@mui/material/Typography' {
    export interface TypographyPropsVariantOverrides {
        title: true;
        btnContent: true;
        textlink2: true;
    }
}
