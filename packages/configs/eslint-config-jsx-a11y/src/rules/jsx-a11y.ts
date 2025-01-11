import type { FlatConfig } from "@typescript-eslint/utils/ts-eslint";

const rules: FlatConfig.Rules = {
  "jsx-a11y/alt-text": "warn",
  "jsx-a11y/anchor-has-content": [
    "warn",
    {
      components: ["Link", "NavLink"],
    },
  ],
  "jsx-a11y/anchor-is-valid": [
    "warn",
    {
      aspects: ["noHref", "invalidHref"],
    },
  ],
  "jsx-a11y/aria-activedescendant-has-tabindex": "warn",
  "jsx-a11y/aria-props": "warn",
  "jsx-a11y/aria-proptypes": "warn",
  "jsx-a11y/aria-role": [
    "warn",
    {
      ignoreNonDOM: true,
    },
  ],
  "jsx-a11y/aria-unsupported-elements": "warn",
  "jsx-a11y/iframe-has-title": "warn",
  "jsx-a11y/img-redundant-alt": "warn",
  "jsx-a11y/lang": "warn",
  "jsx-a11y/no-access-key": "warn",
  "jsx-a11y/no-redundant-roles": "warn",
  "jsx-a11y/role-has-required-aria-props": "warn",
  "jsx-a11y/role-supports-aria-props": "warn",
};

export { rules };
