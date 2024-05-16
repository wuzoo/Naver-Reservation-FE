import { Theme } from "@/styles/theme";
import { css } from "@emotion/react";

export const wrapper = css({
    width: "100%",
    height: "100%",

    padding: "18px 18px 24px 14px"
});

export const title = css({
    display: "flex",
    gap: "3px",
    color: Theme.color.mediumGray,

    fontSize: "14px",
    fontWeight: "600",
});

export const detail = css({
    padding: "16px 5px 1px 0",

    color: Theme.color.mediumGray,

    fontSize: "14px",
    fontWeight: "400",
    lineHeight: "19.6px"
});

export const writing = css({
    width: "100%",
    height: "89px",
    padding: "0 5px",

    border: "0px",
    outline: 'none',

    fontSize: "14px",
    fontWeight: "500",
    lineHeight: "19.6px",

    color: Theme.color.mediumGray,
    resize: "none",

    '::placeholder': {
        color: Theme.color.lowLightGray,
        fontWeight: "400",
    },
});

export const cntWrapper = css({
    display: "flex",
    justifyContent: "end",

    color: Theme.color.mediumGray,

    fontSize: "12px",
    fontWeight: "500"
});