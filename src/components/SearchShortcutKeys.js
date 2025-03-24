import react, { useMemo } from 'react';
import React from "react";


export default function SearchShortcutKeys(props) {

  const isMac = useMemo(() => {
    if (navigator.userAgentData) {
      return navigator.userAgentData.platform === 'macOS';
    }
    return navigator.userAgent.includes('Mac');
  });

  return (
    <span {...props}>{isMac ? "⌘+G" : "Ctrl+G"}</span>
    )
}