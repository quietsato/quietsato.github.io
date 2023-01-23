import React from "react";
import styled from "styled-components";
import { TimelineItem } from "../../types";
import Card from "../Card";
import LinkChip from "../LinkChip";

////////////////////////////////////////////////////////////////////////////////
// Types
////////////////////////////////////////////////////////////////////////////////
export type Props = TimelineItem;

////////////////////////////////////////////////////////////////////////////////
// Private functions
////////////////////////////////////////////////////////////////////////////////
function genYearMonthString(year: number, month: number): string {
  const y = year.toString();
  const m = month.toString().padStart(2, "0");
  return `${y}/${m}`;
}

////////////////////////////////////////////////////////////////////////////////
// Styles
////////////////////////////////////////////////////////////////////////////////
const YearMonth = styled.p``;
const Title = styled.h3`
  font-size: 1.25em;
`;
const Desc = styled.p``;
const LinkChipList = styled.ul`
  padding: 0;
  margin: 0.5em 0 0;
  list-style: none;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: flex-start;
  gap: 0.5em;
`;
const LinkChipListItem = styled.li``;

////////////////////////////////////////////////////////////////////////////////
// Export
////////////////////////////////////////////////////////////////////////////////
const TimelineCard: React.FC<Props> = (props) => {
  return (
    <Card>
      <YearMonth>{genYearMonthString(props.year, props.month)}</YearMonth>
      <Title>{props.title}</Title>
      {props.description && <Desc>{props.description}</Desc>}
      {props.links && (
        <LinkChipList>
          {props.links.map((link) => (
            <LinkChipListItem key={link.url}>
              <LinkChip text={link.text} url={link.url} />
            </LinkChipListItem>
          ))}
        </LinkChipList>
      )}
    </Card>
  );
};

export default TimelineCard;
