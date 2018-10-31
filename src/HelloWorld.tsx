// This is where you would start the cross platform part of your SDX

import React = require('react');
import { CommandButton } from '@office-iss/polyester/lib/common/CommandButton';
import { Image } from '@office-iss/polyester/lib/common/Image';
import { Text } from '@office-iss/polyester/lib/common/Text';
import { View } from '@office-iss/polyester/lib/common/View';
import { Separator } from '@office-iss/polyester/lib/common/Separator';
import { RequestContext } from '@microsoft/office-api/excel';
require('@microsoft/office-api/office.runtime');

export interface IHelloWorldProps {}

export interface IHelloWorldState {
  message: string;
}

export class HelloWorld extends React.Component<IHelloWorldProps, IHelloWorldState> {
  constructor(props: IHelloWorldProps) {
    super(props);
    this.state = { message: 'Set Selection' };
  }

  public render() {
    /*
    Add in the string references once localized string are available.
    Add in the image reference once the web platform story is worked out.
            <View>
              <Text>Call getString('title')</Text>
            </View>
            <View>
              <Text>Call getString('flagCaption')</Text>
              <Image source={require('../assets/en-us/flag.png')} /> // path should be './flag.png' once assetLoader is locale-aware
            </View>
    */
    return (
      <View style={{ flexDirection: 'column', margin: 30 }}>
        <View style={{ height: 300, marginTop: 20 }}>
          <Text textStyle="ExtraLargeStandard">Hello World</Text>
          <Text>
            Select content in the document. Then, click the button below to display your selection in the text box.
          </Text>
        </View>
        <Separator />
        <CommandButton onClick={this.onClicked} text={this.state.message} />
      </View>
    );
  }

  private onClicked = (event: Object) => {
    /* To make this API call work, you currently need to enable debugging. VSO bug # 2263354*/
    const ctx = new RequestContext();

    if (!ctx) {
      this.setState({ message: 'error' + ctx });
    }

    const range = ctx.workbook
      .getSelectedRange()
      .getCell(0, 0)
      .getResizedRange(1, 1);

    range.values = [['Hello', 'World'], [100, 200]];
    ctx.load(range);

    this.setState({ message: 'Setting hello world into selected range.' });
    return ctx.sync();
  };
}
