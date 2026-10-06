import type { ComponentType } from "react";
import { Braces, Users, Webhook } from "lucide-react";
import {
  SiClaude,
  SiCss,
  SiDocker,
  SiExpo,
  SiGit,
  SiGooglecloud,
  SiGraphql,
  SiJavascript,
  SiLaravel,
  SiMysql,
  SiNextdotjs,
  SiPhp,
  SiPostgresql,
  SiRailway,
  SiReact,
  SiTailwindcss,
  SiTypescript,
  SiVuedotjs,
  SiWordpress,
} from "react-icons/si";
import type { TechIconKey } from "@/types/profile";

export type IconComponent = ComponentType<{ className?: string }>;

export const TECH_ICONS: Record<TechIconKey, IconComponent> = {
  javascript: SiJavascript,
  typescript: SiTypescript,
  react: SiReact,
  nextjs: SiNextdotjs,
  vue: SiVuedotjs,
  tailwind: SiTailwindcss,
  css: SiCss,
  php: SiPhp,
  laravel: SiLaravel,
  wordpress: SiWordpress,
  mysql: SiMysql,
  postgresql: SiPostgresql,
  graphql: SiGraphql,
  docker: SiDocker,
  railway: SiRailway,
  gcp: SiGooglecloud,
  git: SiGit,
  claude: SiClaude,
  expo: SiExpo,
  api: Webhook,
  agile: Users,
  code: Braces,
};
