import * as React from "react";

export type DropdownClickHandlerProps = {
  children: ({
    isVisible,
    handleMenuClick
  }: {
    isVisible: boolean;
    handleMenuClick: () => void;
  }) => JSX.Element;
};

export type DropdownClickHandlerState = {
  isVisible: boolean;
};

class ClickHandler extends React.Component<
  DropdownClickHandlerProps,
  DropdownClickHandlerState
> {
  state = {
    isVisible: false
  };

  componentDidMount(): void {
    document.addEventListener("mousedown", this.handleClickOutside);
    document.addEventListener("scroll", this.handleMenuScrollClose);
  }

  componentWillUnmount(): void {
    document.removeEventListener("mousedown", this.handleClickOutside);
    document.addEventListener("scroll", this.handleMenuScrollClose);
  }

  wrapperRef = React.createRef<HTMLDivElement>();

  handleClickOutside = (event: Event): void => {
    if (
      this.state.isVisible &&
      this.wrapperRef.current &&
      !this.wrapperRef.current.contains(event.target as Node)
    ) {
      this.handleMenuClose();
    }
  };

  handleMenuScrollClose = (): void => {
    if (this.state.isVisible && this.wrapperRef.current) this.handleMenuClose();
  };

  handleMenuClose = (): void => this.setState({ isVisible: false });

  handleMenuClick = (): void => {
    this.setState(prevState => ({ isVisible: !prevState.isVisible }));
  };

  render = (): JSX.Element => (
    <div ref={this.wrapperRef}>
      {this.props.children({
        isVisible: this.state.isVisible,
        handleMenuClick: this.handleMenuClick
      })}
    </div>
  );
}

export default ClickHandler;
