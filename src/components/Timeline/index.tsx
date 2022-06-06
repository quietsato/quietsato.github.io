import React from "react";
import styled from "styled-components";
import { TimelineItem } from "../../types";
import TimelineCard from "./TimelineCard";

////////////////////////////////////////////////////////////////////////////////
// Types
////////////////////////////////////////////////////////////////////////////////
export type Props = {
  timelineItems: TimelineItem[];
};

////////////////////////////////////////////////////////////////////////////////
// Styles
////////////////////////////////////////////////////////////////////////////////
const List = styled.ul`
  width: 100%;
  display: grid;
  grid-template-columns: 1fr;
  grid-auto-rows: auto;
  grid-auto-flow: row;
  justify-content: center;
  gap: 1em;
  list-style: none;
  margin: 0;
  padding: 0;
`;
const ListItem = styled.li``;

////////////////////////////////////////////////////////////////////////////////
// Export
////////////////////////////////////////////////////////////////////////////////
const Timeline: React.FC<Props> = (props) => {
  return (
    <List>
      {props.timelineItems.map((item, i) => (
        <ListItem key={i}>
          <section>
            <TimelineCard {...item} />
          </section>
        </ListItem>
      ))}
    </List>
  );
};

export default Timeline;
