'use client';

import { Container, Stack, Text, Title, Box, Button } from '@mantine/core';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

import { PRICING_DATA } from '@/constants/pricing-data';

export const Pricing = () => {
  return (
    <Container py={80} size="xl">
      <Stack align="center" mb={50}>
        <Title
          order={1}
          fw={800}
          ta="center"
          fz={{ base: 40, sm: 44, md: 48 }}
        >
          Choose Your Plan
        </Title>
        <Text
          c="dimmed"
          ta="center"
          maw={600}
          fz={{ base: 14, sm: 15, md: 16 }}
        >
          Whether you want to get organized, keep your personal life on track, or
          boost workplace productivity, Evernote has the right plan for you.
        </Text>
      </Stack>

      <Swiper
        spaceBetween={20}
        slidesPerView={3}
        loop={false}
        style={{ padding: '20px 0' }}
      >
        {PRICING_DATA.map(
          ({ id, plan, price, text, features, borderColor, highlighted }) => (
            <SwiperSlide key={id}>
              <Box
                style={{
                  border: `1px solid ${borderColor}`,
                  borderRadius: 10,
                  padding: '40px 24px',
                  margin: highlighted ? '0 10px' : '0',
                  backgroundColor: highlighted ? '#043873' : '#fff',
                  color: highlighted ? '#fff' : '#000',
                  transform: highlighted ? 'scale(1.05)' : 'scale(1)',
                  transition: 'all 0.3s ease-in-out',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  height: '100%',
                  minHeight: 480,
                }}
              >
                <div>
                  <Text fw={600} fz="24px" mb={8}>
                    {plan}
                  </Text>
                  <Text fw={700} fz="36px" mb={8} c={highlighted ? '#ffe492' : '#000'}>
                    {price}
                  </Text>
                  <Text c={highlighted ? 'gray.3' : 'dimmed'} mb={16} fz="18px">
                    {text}
                  </Text>

                  <Stack gap={8} mb={16}>
                    {features.map((feature, index) => (
                      <Text
                        key={index}
                        c={highlighted ? 'gray.3' : 'dimmed'}
                        fz="16px"
                        style={{
                          display: 'flex',
                          alignItems: 'center',
                          gap: 8,
                        }}
                      >
                        ✓ {feature}
                      </Text>
                    ))}
                  </Stack>
                </div>

                <Button
                  w={150}
                  variant={highlighted ? 'filled' : 'outline'}
                  color={highlighted ? 'gray.0' : 'dark'}
                  style={{
                    backgroundColor: highlighted ? '#4f9cf9' : '#fff',
                    color: highlighted ? '#fff' : '#000 ',
                    borderColor: highlighted ? '#4f9cf9' : borderColor,
                    marginTop: 16,
                  }}
                >
                  Get Started
                </Button>
              </Box>
            </SwiperSlide>
          )
        )}
      </Swiper>
    </Container>
  );
};
