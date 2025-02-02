import type { ReduxAction } from "@appsmith/constants/ReduxActionConstants";
import type { PaginationField } from "api/ActionAPI";
import React, { createContext, useMemo } from "react";

interface SaveActionNameParams {
  id: string;
  name: string;
}

interface ApiEditorContextContextProps {
  moreActionsMenu?: React.ReactNode;
  handleDeleteClick: () => void;
  handleRunClick: (paginationField?: PaginationField) => void;
  actionRightPaneBackLink?: React.ReactNode;
  // TODO: Fix this the next time the file is edited
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  settingsConfig: any;
  saveActionName?: (
    params: SaveActionNameParams,
  ) => ReduxAction<SaveActionNameParams>;
  closeEditorLink?: React.ReactNode;
  showRightPaneTabbedSection?: boolean;
  actionRightPaneAdditionSections?: React.ReactNode;
  notification?: React.ReactNode | string;
}

type ApiEditorContextProviderProps =
  React.PropsWithChildren<ApiEditorContextContextProps>;

export const ApiEditorContext = createContext<ApiEditorContextContextProps>(
  {} as ApiEditorContextContextProps,
);

export function ApiEditorContextProvider({
  actionRightPaneAdditionSections,
  actionRightPaneBackLink,
  children,
  closeEditorLink,
  handleDeleteClick,
  handleRunClick,
  moreActionsMenu,
  notification,
  saveActionName,
  settingsConfig,
  showRightPaneTabbedSection,
}: ApiEditorContextProviderProps) {
  const value = useMemo(
    () => ({
      actionRightPaneAdditionSections,
      actionRightPaneBackLink,
      closeEditorLink,
      handleDeleteClick,
      showRightPaneTabbedSection,
      handleRunClick,
      moreActionsMenu,
      saveActionName,
      settingsConfig,
      notification,
    }),
    [
      actionRightPaneBackLink,
      actionRightPaneAdditionSections,
      closeEditorLink,
      handleDeleteClick,
      showRightPaneTabbedSection,
      handleRunClick,
      moreActionsMenu,
      saveActionName,
      settingsConfig,
      notification,
    ],
  );

  return (
    <ApiEditorContext.Provider value={value}>
      {children}
    </ApiEditorContext.Provider>
  );
}
