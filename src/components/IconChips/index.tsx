import React from "react";
import styled from "styled-components";
import { IconChipItem } from "../../types";
import Card from "../Card";

////////////////////////////////////////////////////////////////////////////////
// Props
////////////////////////////////////////////////////////////////////////////////
export type Props = {
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
  gap: 1em;
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
const IconChips: React.FC<Props> = (props) => {
  return (
    <List>
      {props.iconChipItems.map((item) => (
        <ListItem>
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
};

export default IconChips;
