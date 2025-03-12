import React from 'react';
// Using any type to bypass the type checking issues between different versions of react-icons
// This is a workaround for the common error: "Argument of type 'IconType' is not assignable to parameter of type..."

/**
 * A helper function to safely render icons by bypassing the type checking issues
 * This resolves the common error: "Argument of type 'IconType' is not assignable to parameter of type..."
 * 
 * @param Icon The icon component from react-icons library
 * @param size Optional size to pass to the icon component
 * @returns Rendered icon element
 */
export const renderIcon = (Icon: any, size: number = 24): React.ReactElement => {
  return <Icon size={size} />;
};