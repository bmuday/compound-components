import React from "react";
import classnames from "classnames";
import { Container, Body, Button, Image, Text, Title } from "./styles/Card";

export function Card({ classes, children, ...restProps }) {
  return (
    <Container className={classnames("card", classes)} {...restProps}>
      {children}
    </Container>
  );
}

Card.Body = function CardBody({ classes, children, ...restProps }) {
  return (
    <Body className={classnames("card__body", classes)} {...restProps}>
      {children}
    </Body>
  );
};

Card.Button = function CardButton({ classes, children, ...restProps }) {
  return (
    <Button className={classnames("card__button", classes)} {...restProps}>
      {children}
    </Button>
  );
};

Card.Image = function CardImage({ src, alt, classes, ...restProps }) {
  return (
    <Image
      src={src}
      alt={alt}
      className={classnames("card__image", classes)}
      {...restProps}
    />
  );
};

Card.Text = function CardText({ classes, children, ...restProps }) {
  return (
    <Text className={classnames("card__text", classes)} {...restProps}>
      {children}
    </Text>
  );
};

Card.Title = function CardTitle({ classes, children, ...restProps }) {
  return (
    <Title className={classnames("card__title", classes)} {...restProps}>
      {children}
    </Title>
  );
};
