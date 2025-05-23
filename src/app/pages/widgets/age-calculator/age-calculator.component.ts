import { Component, ViewChild, OnInit } from '@angular/core';
import { SharedModule } from '@app/shared/shared.module';
import { NzCascaderOption } from 'ng-zorro-antd/cascader';
import { sleep } from '@app/shared/utils/common-utils';
@Component({
  selector: 'app-age-calculator',
  imports: [SharedModule],
  templateUrl: './age-calculator.component.html',
  styleUrl: './age-calculator.component.less',
})
export class AgeCalculatorComponent implements OnInit {
  @ViewChild('cascader') cascader;
  options: NzCascaderOption[] = [];
  selectedYear: number = null; // 已选择的年份
  birthDate: string[] = null; // 生日日期

  ngOnInit(): void {}

  onChanges(birthDate: string[]): void {
    console.log(birthDate);
  }

  // 生成年份（当前年份至 120 年前）
  getYears(): NzCascaderOption[] {
    const years: NzCascaderOption[] = [];
    const currentYear = new Date().getFullYear();
    for (let i = currentYear - 120; i <= currentYear; i++) {
      years.push({
        value: i,
        label: `${i}年`,
        isLeaf: false,
      });
    }
    return years;
  }

  // 动态加载月和日
  loadData = (node: NzCascaderOption, index: number): PromiseLike<void> => {
    return new Promise((resolve) => {
      if (index < 0) {
        node.children = this.getYears();
      } else if (index === 0) {
        this.selectedYear = node.value;
        node.children = this.getMonths();
      } else if (index === 1) {
        node.children = this.getDays(this.selectedYear, node.value);
      }

      resolve();
    });
  };

  // 生成月份选项
  getMonths(): NzCascaderOption[] {
    const months: NzCascaderOption[] = [];
    for (let i = 1; i <= 12; i++) {
      months.push({
        value: i,
        label: `${i}月`,
        isLeaf: false,
      });
    }
    return months;
  }

  // 生成日期选项（根据年月限制日期范围）
  getDays(year: number, month: number): NzCascaderOption[] {
    const days: NzCascaderOption[] = [];
    const daysInMonth = new Date(year, month, 0).getDate(); // 获取当月天数
    for (let i = 1; i <= daysInMonth; i++) {
      days.push({
        value: i,
        label: `${i}日`,
        isLeaf: true,
      });
    }
    return days;
  }

  async scrollToItem(open: boolean): Promise<void> {
    if (!open || this.birthDate?.length) return;
    await sleep(100);
    const dropdown = document.querySelector('.ant-cascader-menu') as HTMLElement;
    if (dropdown) {
      const years = this.getYears();
      const year = 1993;
      const index = years.findIndex((item) => item.value === year);
      const middleOption = dropdown.querySelectorAll('.ant-cascader-menu-item')[index] as HTMLElement;
      if (middleOption) {
        dropdown.scrollTop =
          middleOption.offsetTop - dropdown.offsetTop - dropdown.offsetHeight / 2 + middleOption.offsetHeight / 2;
      }
    }
  }
}
