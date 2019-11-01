import React, { useEffect } from 'react';
import { useSpring, animated } from 'react-spring';

export default function Goo() {
  const [{ pos1 }, set] = useSpring({ pos1: [0, 0], config: fast });
  const [{ pos2 }] = useSpring({ pos2: pos1, config: slow });
  const [{ pos3 }] = useSpring({ pos3: pos2, config: slow });
}