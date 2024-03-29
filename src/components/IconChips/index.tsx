import React from "react";
import styled from "styled-components";
import { IconChipItem } from "../../types";
import Card from "../Card";

////////////////////////////////////////////////////////////////////////////////
// Props
////////////////////////////////////////////////////////////////////////////////
type Props = {
  iconChipItems: IconChipItem[];
};

////////////////////////////////////////////////////////////////////////////////
// Styles
////////////////////////////////////////////////////////////////////////////////
const List = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  display: grid;
  grid-template-columns: repeat(auto-fit, 10em);
  justify-content: center;
  margin: 0 auto;
`;

const ListItem = styled.li``;

const Wrapper = styled.div`
  display: flex;
  flex-wrap: nowrap;
  align-items: center;
  gap: 0.5em;
  height: inherit;
`;

const Icon = styled.span`
  font-size: 2em;
  display: flex;
  align-items: center;
`;

const Text = styled.span``;

////////////////////////////////////////////////////////////////////////////////
// Exported component
////////////////////////////////////////////////////////////////////////////////
export default function IconChips(props: Props) {
  return (
    <List>
      {props.iconChipItems.map((item, i) => (
        <ListItem key={i}>
          <Card>
            <Wrapper>
              <Icon>{item.icon}</Icon>
              {item.text && <Text>{item.text}</Text>}
            </Wrapper>
          </Card>
        </ListItem>
      ))}
    </List>
  );
}
