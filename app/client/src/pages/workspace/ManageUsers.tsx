import React from "react";
import styled from "styled-components";
import history from "utils/history";
import { Classes, Icon, IconSize, Text, TextType } from "design-system";
import { useLocation } from "react-router-dom";

const StyledManageUsers = styled("a")`
  margin-top: 12px;
  display: inline-flex;
  &&&& {
    text-decoration: none;
  }

  .${Classes.TEXT} {
    color: ${(props) => props.theme.colors.modal.manageUser};
    margin-right: ${(props) => props.theme.spaces[1]}px;
    font-size: 13px;
    font-weight: 600;
    letter-spacing: 0.6px;
  }
  .${Classes.ICON} {
    svg path {
      fill: ${(props) => props.theme.colors.modal.manageUser};
    }
  }

  &:hover {
    .${Classes.TEXT} {
      color: ${(props) => props.theme.colors.modal.headerText};
    }
    .${Classes.ICON} {
      svg path {
        fill: ${(props) => props.theme.colors.modal.headerText};
      }
    }
  }
`;

function ManageUsers({ workspaceId }: { workspaceId: string }) {
  const currentPath = useLocation().pathname;
  const pathRegex = /(?:\/workspace\/)\w+(?:\/settings)/;

  return !pathRegex.test(currentPath) ? (
    <StyledManageUsers
      className="manageUsers"
      onClick={() => {
        history.push(`/workspace/${workspaceId}/settings/members`);
      }}
    >
      <Text type={TextType.H6}>管理成员</Text>
      <Icon name="manage" size={IconSize.XS} />
    </StyledManageUsers>
  ) : null;
}
export default ManageUsers;
