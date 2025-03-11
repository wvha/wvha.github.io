// import { useState } from 'react';
import { Burger, Container } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
// import { MantineLogo } from '@mantinex/mantine-logo';
import classes from './css/Header.module.css';

// const links = [
//   { link: '/about', label: 'Features' },
//   { link: '/pricing', label: 'Pricing' },
//   { link: '/learn', label: 'Learn' },
//   { link: '/community', label: 'Community' },
// ];

export default function Header() {
  const [opened, { toggle }] = useDisclosure(false);
  // const [active, setActive] = useState(links[0].link);

  // const items = links.map((link) => (
  //   <a
  //     key={link.label}
  //     href={link.link}
  //     className={""}
  //     data-active={active === link.link || undefined}
  //     onClick={(event) => {
  //       event.preventDefault();
  //       setActive(link.link);
  //     }}
  //   >
  //     {link.label}
  //   </a>
  // ));

  return (
    <header className={classes.header}>
      <Container size="md" className={classes.inner}>
        {/* <MantineLogo size={28} /> */}
        <p>WILLIAM HA</p>
        {/* <Group gap={5} visibleFrom="xs">
          {items}
        </Group> */}

        <Burger opened={opened} onClick={toggle} hiddenFrom="xs" size="sm" />
      </Container>
    </header>
  );
}
