// Check if the passed in Props is no the empty {} object
export function hasProps<Props>(props: Partial<Props>): props is Props {
  return Object.keys(props).length !== 0
}
