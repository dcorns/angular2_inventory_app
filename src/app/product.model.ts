/**
 * product.model
 * Created by dcorns on 12/16/16
 * Copyright © 2016 Dale Corns
 */
'use strict';
export class Product{
  constructor(
    public scu: string,
    public name: string,
    public imageUrl: string,
    public department: Array<string>,
    public price: number
  ){

  }
}
