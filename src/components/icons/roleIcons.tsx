import React from 'react';
import { MdSupportAgent, MdElectricalServices } from 'react-icons/md';
import { AiOutlineInfoCircle } from 'react-icons/ai';
import { FaUsers, FaUserTie, FaMicrophone } from 'react-icons/fa';

const ICON_MAP = {
  tecnico_suporte: {
    icon: MdSupportAgent,
    label: 'Técnico de Suporte',
    alt: 'suporte técnico'
  },
  informacao: {
    icon: AiOutlineInfoCircle,
    label: 'Informação',
    alt: 'informações'
  },
  rh: {
    icon: FaUsers,
    label: 'Recursos Humanos',
    alt: 'RH',
    altOption: FaUserTie
  },
  eletricidade: {
    icon: MdElectricalServices,
    label: 'Eletricidade',
    alt: 'eletricista'
  },
  mestre_cerimonias: {
    icon: FaMicrophone,
    label: 'Mestre de Cerimônias',
    alt: 'mc / apresentador'
  }
};

type RoleKey = keyof typeof ICON_MAP;

export default function RoleIcon({
  roleKey,
  size = 24,
  className = ''
}: {
  roleKey: RoleKey;
  size?: number;
  className?: string;
}) {
  const entry = ICON_MAP[roleKey];
  if (!entry) return null;
  const Icon = entry.icon;
  return (
    <span
      className={`role-icon ${className}`}
      title={entry.label}
      aria-label={entry.alt}
      style={{ display: 'inline-flex', alignItems: 'center', gap: 8 }}
    >
      <Icon size={size} />
      <span style={{ fontSize: Math.max(12, size * 0.6) }}>{entry.label}</span>
    </span>
  );
}
