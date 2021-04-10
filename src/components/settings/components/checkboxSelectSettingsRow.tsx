import {css, cx} from '@emotion/css';
import React, {PropsWithChildren} from 'react';

import {useSettingsSearch} from '../settingsContext';
import {reactElementToString} from '../settingsHelpers';
import {SettingsCheckboxSelect, SettingsCheckboxSelectProps} from './settingsCheckboxSelect';
import {SettingsRow, SettingsRowContent, SettingsRowTitle} from './settingsRow';

interface CheckboxSelectSettingsRowProps extends SettingsCheckboxSelectProps {
  ignoreSearch?: boolean;
}

export function CheckboxSelectSettingsRow(
  props: PropsWithChildren<CheckboxSelectSettingsRowProps>
) {
  const {addToIndex} = useSettingsSearch();

  if (!props.ignoreSearch) {
    props.fields
      .filter((f) => !f.isDisabled)
      .forEach((field) => {
        addToIndex(
          {
            key: field.key,
            keywords: [reactElementToString(field.label)],
            render: () => (
              <SettingsRow>
                <SettingsCheckboxSelect
                  fields={[field]}
                  onChange={props.onChange}></SettingsCheckboxSelect>
              </SettingsRow>
            ),
          },
          {} as any
        );
      });
  }

  return (
    <SettingsRow className={cx(css``)} disabled={props.disabled}>
      <SettingsRowTitle>{props.children}</SettingsRowTitle>
      <SettingsRowContent
        className={css`
          display: flex;
          flex-direction: column;
          justify-content: center;
        `}>
        <SettingsCheckboxSelect
          fields={props.fields}
          onChange={props.onChange}></SettingsCheckboxSelect>
      </SettingsRowContent>
    </SettingsRow>
  );
}
