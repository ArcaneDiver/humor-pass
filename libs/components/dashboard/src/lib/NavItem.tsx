import { FlexProps, Link, Flex, Icon } from '@chakra-ui/react';
import { IconType } from 'react-icons';

export type NavItemProps = FlexProps & {
  icon: IconType;
};

export const NavItem: React.FC<NavItemProps> = ({
  icon,
  children,
  ...rest
}) => {
  return (
    <Link href="#" style={{ textDecoration: 'none' }}>
      <Flex
        align="center"
        p="4"
        mx="4"
        borderRadius="lg"
        role="group"
        cursor="pointer"
        _hover={{
          bg: 'cyan.400',
          color: 'white',
        }}
        {...rest}
      >
        {icon && (
          <Icon
            mr="4"
            fontSize="16"
            _groupHover={{
              color: 'white',
            }}
            as={icon}
          />
        )}
        {children}
      </Flex>
    </Link>
  );
};
